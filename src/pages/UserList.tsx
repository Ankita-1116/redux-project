import React from 'react'
import DataTable from 'react-data-table-component';
import Layout from '../components/Layout';
import { IonButton } from '@ionic/react';

const UserList = () => {
    const columns = [
        {
            name: 'Id',
            selector: 'id',
            sortable: true,
        },
        {
            name: 'Title',
            selector: 'title',
            sortable: true,
        },
        {
            name: 'Year',
            selector: 'year',
            sortable: true,
        },
    ];
    const data = [
        { id: 1, title: 'Conan the Bsdsarbarian', year: '1982' },
        { id: 11, title: 'Conan the dBarbarian', year: '1932' },
        { id: 14, title: 'Conan sdsthe Barbarian', year: '1982' },
        { id: 51, title: 'Conandas the Barbarian', year: '5982' },
        { id: 16, title: 'Conan thsde Barbarian', year: '1972' },
        { id: 13, title: 'Conansd the Barbarian', year: '1952' },
        { id: 5, title: 'Conan thdfdfe Barbarian', year: '1972' },
        { id: 61, title: 'Conan thdfe Barbarian', year: '1942' },
        { id: 12, title: 'Conandfd the Barbarian', year: '1922' },
        { id: 81, title: 'Conan the Badfrbarian', year: '1962' },
    ];
   
    const actionsMemo = React.useMemo(() => <IonButton onClick={(e: any) => downloadCSV(data)}>Export</IonButton>, []);

    const convertArrayOfObjectsToCSV = (data: any) => {
        let result: any;

        const columnDelimiter = ',';
        const lineDelimiter = '\n';
        const keys = Object.keys(data[0]);

        result = '';
        result += keys.join(columnDelimiter);
        result += lineDelimiter;

        data.forEach((item: any) => {
            let ctr = 0;
            keys.forEach(key => {
                if (ctr > 0) result += columnDelimiter;

                result += item[key];

                ctr++;
            });
            result += lineDelimiter;
        });

        return result;
    }

    const downloadCSV = (data: any) => {
        const link = document.createElement('a');
        let csv = convertArrayOfObjectsToCSV(data);
        if (csv == null) return;

        const filename = 'export.csv';

        if (!csv.match(/^data:text\/csv/i)) {
            csv = `data:text/csv;charset=utf-8,${csv}`;
        }

        link.setAttribute('href', encodeURI(csv));
        link.setAttribute('download', filename);
        link.click();
    }

   

    return (
        <Layout back={false} tabs={true} heading="Please enter your details ">

            <DataTable
                title="User List"
                columns={columns}
                data={data}
                defaultSortField="title"
                pagination={true}
                fixedHeader={true}
                actions={actionsMemo}

            />
        </Layout>
    )
}

export default UserList
