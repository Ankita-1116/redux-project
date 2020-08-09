import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import Layout from '../components/Layout';
import { IonButton } from '@ionic/react';
import { roamerList_API } from '../services/Services';

const UserList = () => {
    const [tableData, setTabelData] = useState([])

    useEffect(() => {
        roamerList_API({}, OnListSuccess)
    }, [])

    const OnListSuccess = (status: any, response: any) => {
        setTabelData(response)
    }
    const columns = [
        {
            name: 'Id',
            selector: 'id',
            sortable: true,
        },
        {
            name: 'First Name',
            selector: 'firstName',
            sortable: true,
        },
        {
            name: 'Last Name',
            selector: 'lastName',
            sortable: true,
        },
        {
            name: 'Phone',
            selector: 'phone',
            sortable: true,
        },
        {
            name: 'Email',
            selector: 'email',
            sortable: true,
        },
        {
            name: 'ZipCode',
            selector: 'zipCode',
            sortable: true,
        },
        {
            name: 'Num Visits',
            selector: 'numvisits',
            sortable: true,
        },
        {
            name: 'Visits',
            selector: 'visits',
            sortable: true,
        },
    ];
  

    const actionsMemo = React.useMemo(() => <IonButton onClick={(e: any) => downloadCSV(tableData)}>Export</IonButton>, []);

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
                data={tableData}
                defaultSortField="title"
                pagination={true}
                fixedHeader={true}
                actions={actionsMemo}

            />
        </Layout>
    )
}

export default UserList
