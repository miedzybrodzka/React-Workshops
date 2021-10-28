import React from 'react';
import { Redirect } from 'react-router-dom';
import getUserName from './Authorization';
import useFetchTagBundle, { GET_BUNDLE_MANY } from "../queries/useFetchTagBundle";
import { gql, useMutation } from "@apollo/client";
import '../styles/bundle.css';
import TagBundle from '../components/TagBundle';
import useProfile from '../queries/useProfile';

const CREATE_BUNDLE = gql`
mutation CreateBundle($record: CreateOneTagBundleInput!){
    tagBundleCreateOne(record: $record){
        record {
            name 
        }
    }
}`


const Bundle = () => {

    const [createBundle] = useMutation(CREATE_BUNDLE, {
        refetchQueries: [GET_BUNDLE_MANY, "GetBundleMany"]
    });

    const newBundle = () => {


        const newText = window.prompt('');

        createBundle(
            {
                variables: {
                    record: {
                        name: newText
                    }
                }
            }
        )
        console.log(newText);
    }

    const { data, loading, error } = useFetchTagBundle();
    console.log(data);

    const { data: profileData, loading: profileLoading, error: profileError } = useProfile();

    if (loading || profileLoading) return <div className="titleText">LOADING...</div>
    if (error || profileError) return <div className="titleText">ERROR: </div>

    return (
        <div>
            <h1 className="titleText">MY BUNDLES:</h1>
            {!getUserName() && <Redirect to='/' />}
            <ol className='listBundle'>
                {data.map((singleBundle) => {
                    return (
                        <TagBundle key={singleBundle._id} singleBundle={singleBundle}
                            profileData={profileData}
                        />
                    );
                })}
            </ol>
            <div>
                <button onClick={newBundle} className="buttonStyle">ADD BUNDLE</button>
            </div>
        </div>
    )
}

export default Bundle;