import {gql} from '@apollo/client';

const mutations = {
    CREATE_ENTRY_MANY: gql`
    mutation CreateEntry($record: Entry) {
        createEntry(record: $record){
          startTime
          endTime
        }
      }
      `
}

export default mutations;