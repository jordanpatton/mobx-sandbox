import gql from 'graphql-tag';

export const GQL_GET_UI_SELECTED_USER_ID = gql`
query getUiSelectedUserId {
    uiSelectedUserId @client
}
`;

export const GQL_GET_USER = gql`
query getUser($id: ID!) {
    user(id: $id) {
        id
        first_name
        last_name
        email_address
        company_name
        image_url
    }
}
`;

export const GQL_INDEX_USERS = gql`
query indexUsers {
    users {
        id
        first_name
        last_name
        email_address
        company_name
        image_url
    }
}
`;

export const GQL_INDEX_WIDGETS = gql`
query indexWidgets($owner_id: ID) {
    widgets(owner_id: $owner_id) {
        id
        owner_id
        name
        description
        image_url
    }
}
`;
