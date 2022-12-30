BUCKET_NAME=$1
DISTRIBUTION_ID=$2

echo "-- Install --"
# Install dependencies
npm install

echo "-- Build --"
# Build
npm build

echo "-- Deploy --"
# Sync build with our S3 bucket
aws s3 sync build s3://$BUCKET_NAME
# Invalidate cache
# aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --p