import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { TaskType } from "../../types/Tasks";
import CreatTaskModal from "../../components/Modals/CreateTaskModal/CreateTaskModal";
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  createTask: (taskData: TaskType) =>
    dispatch({ type: "task/create", payload: taskData }),
});

export default connect(null, mapDispatchToProps)(CreatTaskModal);
