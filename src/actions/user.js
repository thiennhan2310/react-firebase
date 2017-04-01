import * as firebase from 'firebase';
import axios from 'axios';
import {ENDPOINT_USERS_INFO} from '../config/index.js';
let defaultUser = {
  fullName: 'Unknown',
  companyName: '',
  professionalHeadline: '',
  avatar:'http://designstacks.net/content_images/AdobePhotoshop/TextEffects/sky/45.gif'
};

export const SET_USER_INFO = 'SET_USER_INFO';
export const SET_CURRENT_USER= 'SET_CURRENT_USER';
export const SET_RECEIVER_USER= 'SET_RECEIVER_USER';
export const setUserInfo = (userId, userInfo) => {
    return {
        type: SET_USER_INFO,
        userInfo: userInfo,
        userId: userId
    }
}

export const setCurrentUser = (userId, userInfo) => {
  return {
      type: SET_CURRENT_USER,
      userInfo: userInfo,
      userId: userId
  }
}

export const setReceiverInfo = (receiverId, receiverInfo) => {
    return {
        type: SET_RECEIVER_USER,
        receiverId: receiverId,
        receiverInfo: receiverInfo
    }
}

export function getCurrentUser(userId) {
  return getUserInfo(userId, setCurrentUser);
}

export function getUserInfo(userId, done) {
    //console.log(userId);
    done = done || setUserInfo;

    return (dispatch) => {
        const rootRef = firebase.database().ref('users');
        const childRef = rootRef.child(userId);
        childRef.on('value', snap => {
            let userInfo = snap.val()
            //console.log(userInfo);
            dispatch(done(userId, userInfo))
        });
    }
}
export function queryUsers(userIdArrs) {
    return (dispatch) => {

      var params = new URLSearchParams();
      params.append('userIds', userIdArrs);
        axios.post(ENDPOINT_USERS_INFO, params, {
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(function (response) {
              let users = response.data.result;
              for (var userId of userIdArrs) {
                dispatch(setUserInfo(userId, users[userId] || defaultUser));
              }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
