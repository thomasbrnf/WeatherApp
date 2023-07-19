import { LogoText, HBox, HGroup, SearchButton, SearchInput } from "../ui";
import { Image } from "@mantine/core";

export const SearchBar = ({ form, onSearch }: any) => {
  return (
    <HBox>
      <LogoText>Weatherly .</LogoText>

      <HGroup>
        <SearchInput
          form={form}
          placeholder="Location"
          name="location"
          type="text"
        />
        <SearchButton type="submit" onClick={onSearch}>
          <Image src="/search.svg" />
        </SearchButton>
      </HGroup>
    </HBox>
  );
};
