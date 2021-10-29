import React, { useState } from 'react';
import Modal from 'react-modal';
import { gql, useMutation } from "@apollo/client";
import useProfile from '../queries/useProfile';
import useTagBundle from '../queries/useTagBundle';
import css from '../styles/tagsBundle.css';

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
        profileData,
        _id,
        tagData
    } = props;


    const isCreator = singleBundle.creatorId === profileData._id;
    const tags = useTagBundle(_id);

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

        if (isCreator) {
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
            alert("You don't have access.");
        }

    }


    return (
        <li>
            <button onClick={openModal} className="buttonBundle">
                {singleBundle.name}
            </button>
            <Modal isOpen={modalIsOpen}
                onRequestClose={closeModal}>
                <div>
                    <h3 className="name">Name:</h3>
                    <h3 className="bundleName">{singleBundle.name}</h3></div>
                <h3>Description:</h3>
                <textarea value={textInTextArea} onChange={typeDescribe} placeholder={singleBundle.description} onBlur={saveDescription} />
                <div>
                    <ol>{tagData && tagData.map((tagsBundle) => {
                        console.log(tagData);
                        return (
                            <div key={tagsBundle._id}>
                                <span> Tags: {tagsBundle.tags.name}
                                </span>
                            </div>
                        );
                    })}
                    </ol>
                </div>
                <div><button className="closeButton" onClick={closeModal}>Close</button></div>
            </Modal>
        </li>
    );
}

export default TagBundle;