module.exports = {
    400: 'Bad Request	Invalid request or format.',
    401: 'Unauthorized	Invalid authentication credentials.',
    403: 'Forbidden	No access to the requested resource.',
    404: 'Not Found	Resource could not be located.',
    422: 'Unprocessable Entity	The request format is valid but the request did not succeed. For example, 422 is returned if an order is placed with insufficient funds.',
    500: 'Internal Server Error	Unexpected server error. This code does not necessarily indicate a failure in the call so the resulting state is unknown.',
};
