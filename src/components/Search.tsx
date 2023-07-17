import { LogoText, CustomHorizontalBox, ActionHorizontalGroup, SearchButton } from "../components/Components";
import { CustomSearch } from '../components/action/CustomInput';
import { Image } from '@mantine/core';

export const Search = ({form, onSearch} : any) => {
    return (
        <CustomHorizontalBox>
        <LogoText>Weatherly .</LogoText>

        <ActionHorizontalGroup>
        
            <CustomSearch form={form} placeholder="Location" name='location' type='text'/>
            <SearchButton type='submit' onClick={onSearch}>
                <Image src='/search.svg'/>
            </SearchButton>

        </ActionHorizontalGroup>
    </CustomHorizontalBox>
    )
  }
