// in posts.js
import * as React from "react";
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput } from 'react-admin';



export const PostList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="titulo" />
            <DateField source="valor" />
            <TextInput multiline source="detalle" />          
            <EditButton basePath="/podoservicios" />
        </Datagrid>
    </List>
);

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextField source="titulo" />
            <DateField source="valor" />
            <TextInput multiline source="detalle" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = (props) => (
    <Create title="Create a Post" {...props}>
        <SimpleForm>
        <TextField source="titulo" />
            <DateField source="valor" />
            <TextInput multiline source="detalle" />
        </SimpleForm>
    </Create>
);