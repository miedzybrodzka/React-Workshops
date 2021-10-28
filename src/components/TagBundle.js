import React, { useState } from 'react';
import Modal from 'react-modal';
import { gql, useMutation } from "@apollo/client";
import '../queries/useProfile';

const UPDATE_BUNDLE = gql`
mutation updateBundle($_id: MongoID!, $record: UpdateByIdTagBundleInput!) {
    tagBundleUpdateById(_id: $_id, record: $record){
      record{
        name
        description
        _id
      }
    }
}`

const TagBundle = (props) => {

    const {
        singleBundle,
        profileData
    } = props;

    const isCreator = singleBundle.creatorId === profileData._id;

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [textInTextArea, setTextInTextArea] = useState();

    const [updateBundle] = useMutation(UPDATE_BUNDLE);

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    const typeDescribe = (event) => {
        setTextInTextArea(event.target.value);
    }

    const saveDescription = () => {
        console.log('ts')

        if (isCreator) {
            console.log('ts2')
            updateBundle(
                {
                    variables: {
                        _id: singleBundle._id,
                        record: {
                            description: textInTextArea
                        }
                    }
                }
            );
        } else {
            alert('Nie ma dostępu');
        }

    }


    return (
        <li>
            <button onClick={openModal}>
                {singleBundle.name}
            </button>
            <Modal isOpen={modalIsOpen}
                onRequestClose={closeModal}>
                <h3>Name:</h3>
                <h3>{singleBundle.name}</h3>
                <h3>Description:</h3>
                <textarea value={textInTextArea} onChange={typeDescribe} placeholder="Type something..." onBlur={saveDescription} />
                <button onClick={closeModal}>Close</button>
            </Modal>
        </li>
    );
}

export default TagBundle;