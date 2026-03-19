import e from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import adminUploadRoutes from "./Routes/admin.js";
import { userUpload } from "./Controllers/userHandler.js";
import { userUploadRouter } from "./Routes/user.js";
import { ALLOWED_ORIGINS, BASE_URL, PORT } from "./config.js";

const app = e();
export const base_url = BASE_URL;

app.use(
  cors({
    origin: ALLOWED_ORIGINS,
    credentials: true,
  })
);
app.use(e.json({ limit: "50mb" }));
app.use("/photos", e.static("uploads"));
app.use(e.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

app.use("/user", userUploadRouter);
app.use("/admin", adminUploadRoutes);

app.listen(PORT, () => console.log("listening on port", PORT));
