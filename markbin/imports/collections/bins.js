import { Mongo } from 'meteor/mongo';

Meteor.methods({
    'bins.insert': function () { // can't use fat arrow function because of context 'this.userId'
        return Bins.insert({
            createdAt: new Date(),
            content: '',
            sharedWith: [],
            ownerId: this.userId // came from Meteor method. http://docs.meteor.com/api/methods.html#DDPCommon-MethodInvocation-userId
        });
    },
    'bins.remove': function (bin) {
        return Bins.remove(bin);
    },
    'bins.update': function (bin, content) {
        return Bins.update(bin._id, { $set: {content: content} });
    },
    'bins.share': function (bin, email) {
        return Bins.update(bin._id, { $push: { sharedWith: email } });
    }
});

export const Bins = new Mongo.Collection('bins');