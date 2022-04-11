import React, { useState } from "react";
import {
  ClearButton,
  ClearButtonIcon,
  Input,
  SearchIcon,
  Wrapper,
} from "@screens/search/components/search-input/SearchInput.style";

const SearchInput = () => {
  const [search, setSearch] = useState("");

  const handleChangeText = (text: string) => {
    console.log(text);
    setSearch(text);
  };

  return (
    <Wrapper>
      <SearchIcon />
      <Input
        placeholder="Search..."
        value={search}
        onChangeText={handleChangeText}
      />
      <ClearButton>
        <ClearButtonIcon />
      </ClearButton>
    </Wrapper>
  );
};

export default SearchInput;
