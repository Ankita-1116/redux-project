import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Layout from "../components/Layout";
import { IonButton } from "@ionic/react";
import { roamerList_API } from "../services/Services";
import {
  Table,
  Button,
  Space,
  Tag,
  Row,
  Col,
  Input,
  Checkbox,
  Modal,
} from "antd";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const UserList = () => {
  const [customFilteredHeader, setCustomFilteredHeader]: any = useState([]);
  const [fullResponse, setfullResponse]: any = useState("");
  const [modalVisibilty, setModalVisibilty]: any = useState(false);
  const [currentRecord, setCurrentRecord]: any = useState({});
  const [tableData, setTabelData] = useState([]);

  const history = useHistory();
  const dispatch = useDispatch();
  const global_data = useSelector((state: any) => state);

  const currentTableName = global_data.currentPage;
  const currentRowId = global_data.currentRowId;

  useEffect(() => {
    const endpoint = "/" + currentRowId + "/" + currentTableName; // jdalsmdasddjasd3kdl8998/user
    roamerList_API(
      endpoint == "/" ? "" : endpoint,
      {},
      OnListSuccess,
      global_data.token
    );
    dispatch({
      type: "HEADER_OBJ",
      header: { rootPage: true, heading: "User List" },
    });
  }, []);
  console.log("User List");

  const OnListSuccess = (status: any, response: any) => {
    setTabelData(response);
  };

  const columns = [
    {
      name: "First Name",
      selector: "firstName",
      sortable: true,
    },
    {
      name: "Last Name",
      selector: "lastName",
      sortable: true,
    },
    {
      name: "Phone",
      selector: "phone",
      sortable: true,
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
    },
    {
      name: "ZipCode",
      selector: "zipCode",
      sortable: true,
    },
    {
      name: "Num Visits",
      selector: "numVisits",
      sortable: true,
    },
    {
      name: "Last Visited On",
      selector: "lastVisitedOn",
      sortable: true,
    },
  ];

  const actionsMemo = React.useMemo(
    () => (
      <IonButton onClick={(e: any) => downloadCSV(tableData)}>Export</IonButton>
    ),
    []
  );

  const convertArrayOfObjectsToCSV = (data: any) => {
    let result: any;

    const columnDelimiter = ",";
    const lineDelimiter = "\n";
    const keys = Object.keys(data[0]);

    result = "";
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    data.forEach((item: any) => {
      let ctr = 0;
      keys.forEach((key) => {
        if (ctr > 0) result += columnDelimiter;

        result += item[key];

        ctr++;
      });
      result += lineDelimiter;
    });

    return result;
  };

  const downloadCSV = (data: any) => {
    const link = document.createElement("a");
    let csv = convertArrayOfObjectsToCSV(data);
    if (csv == null) return;

    const filename = "export.csv";

    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`;
    }

    link.setAttribute("href", encodeURI(csv));
    link.setAttribute("download", filename);
    link.click();
  };

  return (
    <Layout back={false} tabs={false} heading="User List">
      <DataTable
        columns={columns}
        data={tableData}
        defaultSortField="title"
        pagination={true}
        fixedHeader={true}
        actions={actionsMemo}
      />
    </Layout>
  );
};

export default UserList;
