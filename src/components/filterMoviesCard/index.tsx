import React, { useEffect, useState } from "react"; 
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SortIcon from '@mui/icons-material/Sort';
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FilterOption } from "../../types/interfaces";
import { getGenres } from "../../api/tmdb-api";

const styles = {
  root: {
    maxWidth: 345,
  },
  media: { height: 300 },
 
  formControl: {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
};

interface FilterMoviesCardProps {
  onUserInput: (f: FilterOption, s: string)  => void;
  titleFilter: string;
  genreFilter: string;
}



const FilterMoviesCard: React.FC<FilterMoviesCardProps> = ({ titleFilter, genreFilter, onUserInput }) => { 

const initialGenres = [{ id: 0, name: "All" }];
const [genres, setGenres] = useState<{id:number; name:string}[]>(initialGenres);

useEffect(() => {
  getGenres().then((data) => {
    setGenres([...initialGenres, ...data.genres]);
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  // handlers are wired inline below

  return (
    <>
    <Card sx={styles.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <FilterAltIcon fontSize="large" />
          Filter the movies.
        </Typography>
        <TextField
          sx={styles.formControl}
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
          value={titleFilter}
          onChange={(e) => onUserInput("title", e.target.value)}
        />
        <FormControl sx={styles.formControl}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
            labelId="genre-label"
            id="genre-select"
            value={genreFilter}
            onChange={(e) => onUserInput("genre", String((e as SelectChangeEvent).target.value))}
          >
            {genres.map((genre) => (
              <MenuItem key={genre.id} value={String(genre.id)}>
                {genre.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </CardContent>
    </Card>
    <Card sx={styles.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <SortIcon fontSize="large" />
            Sort the movies.
          </Typography>
        </CardContent>
      </Card>
      </>
  );
}

export default FilterMoviesCard;
