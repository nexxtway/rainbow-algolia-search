import React from 'react';
import { connectStats } from 'react-instantsearch-dom';

// eslint-disable-next-line react/prop-types
const ResultCountAdapter = ({ nbHits }) => <span>{nbHits}</span>;

const ResultCount = connectStats(ResultCountAdapter);

export default ResultCount;
