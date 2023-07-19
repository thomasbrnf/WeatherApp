import { LogoText, HBox, HGroup, SearchButton } from "../components/Components";
import { SearchInput } from "../components/action/CustomInput";
import { Image } from "@mantine/core";

export const Search = ({ form, onSearch }: any) => {
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
