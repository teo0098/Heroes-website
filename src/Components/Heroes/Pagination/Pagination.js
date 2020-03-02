import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from './Link/Link';
import './Pagination.scss';
import Spinner from '../../Spinner/Spinner';
import Error from '../../Error/Error';

const Pagination = (props) => {
    const [heroesPages, setHeroesPages] = useState(-1);
    const [spinner, setSpinner] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getCount = async () => {
            try {
                const count = await axios.get('/sheroesCount');
                setHeroesPages(Math.ceil(+count.data.count / 5));
                setSpinner(false);
            } catch (error) {
                setError(true);
                setSpinner(false);
            }
        };
        getCount();
    }, []);

    let pages = [];
    if (heroesPages !== -1) {
        for (let i = 1; i <= heroesPages; i++) {
            pages.push(i);
        }
    }

    return (
        <React.Fragment>
            {error === true ?
            <Error> Can't get pages </Error>
            :
            spinner === true ?
                <Spinner/>
                :
                <div className="Pagination">
                    {pages.map(limit => <Link key={limit} limit={limit}/>)}
                </div>
            }
        </React.Fragment>
    );
};

export default React.memo(Pagination);