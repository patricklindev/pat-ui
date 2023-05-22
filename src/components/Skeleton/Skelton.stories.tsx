import React from 'react';
import Skeleton from './Skeleton';

export default {
    title: 'Skeleton',
    component: Skeleton,
};

export const DefaultSkeleton = () => (
    <Skeleton width='15rem' height='1rem' />
);

export const PulseSkeleton = () => (
    <Skeleton width='15rem' height='1rem' animation='pulse' />
);

export const WaveSkeleton = () => (
    <Skeleton width='15rem' height='1rem' animation='wave' />
);

export const Combination = () => {

    return (
        <div style={{ width: '10rem' }}>
            <Skeleton height='1rem' animation='pulse' variant='text' style={{ marginBottom: '0.5rem' }} />
            <Skeleton width='3rem' height='3rem' animation='pulse' variant='circular' style={{ marginBottom: '0.5rem' }} />
            <Skeleton height='4rem' animation='pulse' variant='text' />
        </div>
    )
}