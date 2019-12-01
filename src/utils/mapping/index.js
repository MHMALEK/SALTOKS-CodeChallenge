import { timeDifference } from 'Utils/date-and-time';
import { convertObjectKeys } from 'Utils/objectUtils';

export const mapRepoTableData = (listOfReops) =>
   listOfReops.map((item) => ({
      full_name: item.full_name,
      owner: item.owner.login,
      description: item.description,
      created_at: item.created_at,
      updated_at: item.updated_at,
   }));

export const mapTimesToRelativeTimes = (listOfReops) =>
   listOfReops.map((item) => ({
      ...item,
      created_at: timeDifference(item.created_at),
      updated_at: timeDifference(item.updated_at),
   }));

export const mapTimesToRelativeTimesForRepoDetails = (repoDetails) => ({
   ...repoDetails,
   created_at: timeDifference(repoDetails.created_at),
   updated_at: timeDifference(repoDetails.updated_at),
});

export const convertToHumanReadable = (repositoryData) => {
   const arrayData = convertObjectKeys(repositoryData);

   // unacceptableDatas = items that are object or false or null
   const unacceptableDatas = arrayData.filter(
      (item) =>
         typeof repositoryData[item] === 'object' ||
         repositoryData[item] === false ||
         repositoryData[item] === true ||
         repositoryData[item] === null,
   );

   let humanReadableData = {};

   const filterObjectItems = unacceptableDatas.filter(
      (item) =>
         typeof repositoryData[item] === 'object' &&
         repositoryData[item] &&
         convertObjectKeys(repositoryData[item]).length > 0,
   );

   const objectsItems = filterObjectItems.reduce(
      (result, item) => (result = { ...result, ...repositoryData[item] }),
      {},
   );

   for (const item of filterObjectItems) {
      delete repositoryData[item];
   }

   const falseItems = unacceptableDatas
      .filter((item) => repositoryData[item] === false)
      .reduce(
         (result, item) =>
            (result = {
               ...result,
               [item]: 'no',
            }),
         {},
      );

   const trueItems = unacceptableDatas
      .filter((item) => repositoryData[item] === true)
      .reduce(
         (result, item) =>
            (result = {
               ...result,
               [item]: 'yes',
            }),
         {},
      );
   const nullItems = unacceptableDatas
      .filter((item) => repositoryData[item] === null)
      .reduce(
         (result, item) =>
            (result = {
               ...result,
               [item]: 'not defined',
            }),
         {},
      );

   humanReadableData = {
      ...repositoryData,
      ...nullItems,
      ...trueItems,
      ...falseItems,
      ...objectsItems,
   };
   return humanReadableData;
};
