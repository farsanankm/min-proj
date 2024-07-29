
export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: 'loading...',
        message: 'data is being loaded'
    },
    success: {
        title: 'success',
        message: 'data successfully loaded'
    },
    resFailure:{
        title:'error',
        message:'an error from the server...pls try again later'
    },
    reqFailure:{
        title:'error',
        message:'error occured while passing data'
    },
    networkError:{
        title:'error',
        message:'unable to connect...'
    }
};

export const SERVICE_URLS={
    usersignup:{url:'/signup', method:'POST'}
}