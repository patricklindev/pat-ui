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