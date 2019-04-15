import gql from 'graphql-tag';

export const GQL_INDEX_USERS = gql`
{
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
