import {Request as ExpressReq} from 'express';
import firebase from 'firebase-admin';

export interface CustomRequest extends ExpressReq {
  user?: firebase.auth.DecodedIdToken;
}
