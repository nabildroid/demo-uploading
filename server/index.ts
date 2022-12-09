import Express from "express";
import FileUploader from "express-fileupload";

import Cors from "cors";
import admin from "firebase-admin";
import ServiceAccount from "./serviceAccount.json";

const firebase = admin.initializeApp({
  credential: admin.credential.cert(ServiceAccount as any),
});

const bucket = firebase.storage().bucket("gs://supernabil-86c2b.appspot.com");
const app = Express();

app.use(Cors());
app.use(Express.json());
app.use(
  FileUploader({
    tempFileDir: "/tmp/",
    useTempFiles: true,
    createParentPath:true
  })
);

app.post("/upload", async (req, res) => {
  if (!req.files || !req.files.image) return res.sendStatus(403);

  const image = req.files.image as any;


  const file = await bucket.upload(image.tempFilePath, {
    destination: "/uploading/" + image.name,
    public: true,

    metadata: {
      contentType: image.type,
      cacheControl: "public, max-age=31536000",
    },
  });

  const url = file[0].publicUrl();

  res.send({
    status: true,
    message: "File is uploaded",
    url,
  });
});

app.listen(3030, () => console.log("listening to port 3030"));
