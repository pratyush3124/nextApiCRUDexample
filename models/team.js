import mongoose, { Schema } from "mongoose";

const teamSchema = new Schema(
  {
    name: String,
    questionNo: String,
  },
  {
    timestamps: true,
  }
);

export const TeamModel = mongoose.models.TeamModel || mongoose.model("TeamModel", teamSchema);
