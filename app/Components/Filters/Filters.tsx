import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './Filters.module.scss'
import { sortState, limitState } from '@/app/States/States';
import { useRecoilState } from 'recoil';

const Filters = () => {
    const [sort, setSort] = useRecoilState(sortState);
    const [limit, setLimit] = useRecoilState(limitState)
    const onSortChange = (e: any) => {
        setSort(e.target.value)
        localStorage.setItem('sort', e.target.value)
    }

    const onLimitChange = (e: any) => {
        setLimit(+e.target.value)
        sessionStorage.setItem('limit', e.target.value)
    }
    return (
        <>
            <select value={sort} onChange={onSortChange}>
                <option>desc</option>
                <option>asc</option>
            </select>
            <input
                type="number"
                value={limit}
                onChange={onLimitChange}
            />
        </>
    )
}

export default Filters