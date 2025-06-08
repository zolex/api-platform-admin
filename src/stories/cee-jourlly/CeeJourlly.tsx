import React from 'react';
import { HydraAdmin, type HydraAdminProps } from '../../hydra';
import ResourceGuesser from '../../core/ResourceGuesser';
import CoffeeEdit from './Coffee/CoffeeEdit';
import CoffeeCreate from './Coffee/CoffeeCreate';
import CoffeeList from './Coffee/CoffeeList';
import JournalCreate from './Journal/JournalCreate';
import JournalEdit from './Journal/JournalEdit';
import JournalList from './Journal/JournalList';
import RatingList from './Ratings/RatingList';
import RecipeList from './Recipes/RecipeList';
import RecipeShow from './Recipes/RecipeShow';

interface BasicProps extends Pick<HydraAdminProps, 'entrypoint'> {}

const CeeJourlly = ({ entrypoint }: BasicProps) => (
  <HydraAdmin entrypoint={entrypoint} title="Coffee JOURNAL">
    <ResourceGuesser
      name="journals"
      list={JournalList}
      edit={JournalEdit}
      create={JournalCreate}
    />
    <ResourceGuesser name="roasters" />
    <ResourceGuesser
      name="coffees"
      list={CoffeeList}
      edit={CoffeeEdit}
      create={CoffeeCreate}
    />
    <ResourceGuesser name="recipes" list={RecipeList} show={RecipeShow} />
    <ResourceGuesser name="origins" />

    <ResourceGuesser name="roast_levels" />
    <ResourceGuesser name="bean_types" />
    <ResourceGuesser name="ingredients" />
    <ResourceGuesser name="ratings" list={RatingList} />
    {/* <ResourceGuesser name="coffee_beans" /> this is now included in coffees */}
  </HydraAdmin>
);

export default CeeJourlly;
