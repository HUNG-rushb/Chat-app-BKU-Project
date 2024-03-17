import config, { chatImageConfig } from './S3.js';
import editName from './editName.js';
import AWS from 'aws-sdk';

const uploadChatImageToAWS = async (selectedFile) => {
  AWS.config.update({
    accessKeyId: chatImageConfig.accessKeyId,
    secretAccessKey: config.secretAccessKey,
  });

  const myBucket = new AWS.S3({
    params: { Bucket: chatImageConfig.bucketName },
    region: chatImageConfig.region,
  });

  const params = {
    ACL: 'public-read',
    Body: selectedFile,
    Bucket: chatImageConfig.bucketName,
    Key: editName(
      selectedFile.name,
      '.',
      Math.floor(100000 + Math.random() * 900000).toString(),
    ),
  };

  let result;
  await myBucket
    .upload(params)
    .promise()
    .then((data) => {
      result = data;
    })
    .catch((err) => console.log(err));

  return result;
};

export { uploadChatImageToAWS };

const useUploadImageToAWS = () => {
  return async ({ selectedFile }) => {
    AWS.config.update({
      accessKeyId: config.accessKeyId,
      secretAccessKey: config.secretAccessKey,
    });

    const myBucket = new AWS.S3({
      params: { Bucket: config.bucketName },
      region: config.region,
    });

    const params = {
      ACL: 'public-read',
      Body: selectedFile,
      Bucket: config.bucketName,
      Key: editName(
        selectedFile.name,
        '.',
        Math.floor(100000 + Math.random() * 900000).toString(),
      ),
    };

    let result;
    await myBucket
      .upload(params)
      .promise()
      .then((data) => {
        result = data;
      })
      .catch((err) => console.log(err));

    return result;
  };
};

export default useUploadImageToAWS;
