// A mock function to mimic making an async request for data
export function fetchAuthStatus(payload: {}) {
    console.log(payload);
    return new Promise<{ data: string }>((resolve) => {
        setTimeout(() => resolve({ data: 'Login Successful' }), 500);
    });
}
