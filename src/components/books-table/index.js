import React from 'react';
import PropTypes from 'prop-types';
import { Table, Column } from 'react-rainbow-components';

export default function BooksTable(props) {
    const { data, isLoading } = props;

    return (
        <Table data={data} keyField="id" isLoading={isLoading}>
            <Column header="Name" field="data.name" />
        </Table>
    );
}

BooksTable.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    data: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
};
