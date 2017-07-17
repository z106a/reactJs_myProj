"use strict";
import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';
import { FETCH_JOBS, LIKE_JOB, CLEAR_LIKED_JOBS } from './types';

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
const JOB_QUERY_PARAMS = {
    publisher: '2125618840534357',
    format: 'json',
    v: '2',
    latlong: 1,
    radius: 10,
    q: 'javascript'
};

 export const fetchJobs = (region, cb) => async dispatch => {
    try {
        let zip = await reverseGeocode(region);
        const url = buildJobsUrl(zip);
        let { data } = await axios.get(url);
        dispatch({ type: FETCH_JOBS, payload: data});
        cb();
    } catch (e) {
        console.log(e);
    }
};

const buildJobsUrl = (zip) => {
    const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });
    return `${JOB_ROOT_URL}${query}`;
}

export const likeJob = (job) => {
    return {
        payload: job,
        type: LIKE_JOB
    }
}

export const clearLikedJobs = () => {
    return { type: CLEAR_LIKED_JOBS }
}