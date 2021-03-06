import { gql } from '@apollo/client';


const Queries = {
  GET_PROFILE: gql`
    query getUser{
      getProfile{
        oauthId
          }
        	tagBundleMany{
            name
          }
      }
    `,
  GET_ENTRIES_FOR_DATE: gql`query getEntriesForDate($date: Date) {
      entryMany(filter: {date: $date}) {
        startTime
        endTime
        date
        tag {
          name
          tagBundle {
              name
          }
        }
        order
        copied
        }
      }
      `,

  GET_ALL_ENTRIES: gql`
   query GetAllEntries {
        entryMany {
          _id 
          startTime
          endTime
          tag {
            name
          }
        }
      }
    `,
  CREATE_ENTRY: gql`
  mutation CreateEntry {
      createEntry(record:{tagBundleName:"selleo", tagName:"test", startTime:"00:22", endTime:"00:13"}){
        startTime
        endTime
      }
    }
  `,

  GET_BUNDLE_MANY: gql`
  query {
    tagBundleMany {
      name
    }
  }`,

  GET_TAG_BUNDLE_BY_ID: gql`
  query tagBundleById($id: MongoID!){
    tagBundleById(
     _id: $id
    ){
      name
      _id
      description
      tags{
        name
      }
    }
  }`

}

export default Queries;

