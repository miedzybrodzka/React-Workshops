import { gql } from '@apollo/client';

const Mutations = {
  CREATE_BUNDLE: gql`
    mutation CreateBundle($record: CreateOneTagBundleInput!){
      tagBundleCreateOne(record: $record){
        record {
          name 
        }
      }
    }`
  ,
  CREATE_ENTRY: gql`
    mutation CreateEntry($record: EntryCreateTypeInput) {
        createEntry(record: $record){
          startTime
          endTime
        }
      }
      `,
  REMOVE_ENTRY: gql`
      mutation removeMyEntry{
        entryRemoveById(_id: "617199181c2f1ac093d3dcfd") {
          recordId
        }
      }`
}

export default Mutations;