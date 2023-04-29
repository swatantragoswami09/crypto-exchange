import { makeStyles } from "@material-ui/core/styles";

export const useStyles:any = makeStyles((theme) => ({
  Allcontainer: {},
  SecondRow: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {},
  Timer: {},
  MainContainer: {
    width: "100%",
    background: "#fff",
    borderRadius: "0.6em",
    border: `1px solid #E0E0E0`,
    margin: "1em",
    overflow: "hidden",
    cursor: "pointer",
    transition: "all ease 200ms",
    "&:hover": {
      transform: "scale(1.03)",
      boxShadow:
        "0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.02)",
    },
  },
  LowerManagnement: {
    display: "flex",
    justifyContent: "space-between",
  },

  UpperContain: {
    display: "flex",
    justifyContent: "space-between",
    padding: "30px",
  },
  LineMan: {
    borderBottom: `1px solid #A9A9A9`,
  },
  LowerContain: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  EmailMangne: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    padding: "15px",
    borderRight: `1px solid #A9A9A9`,
  },
  UpperNameRole: {
    display: "flex",
    justifyContent: "flex-start",
  },
  AdminBack: {
    backgroundColor: "lightgreen",
    borderRadius: "4px",
    textAlign: "center",
    fontSize: "8px",
  },
  CallMangne: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    textAlign: "center",
    padding: "15px",
  },
  ImageMan: {
    borderRadius: "50%",
    height: "30px",
  },
  ImageProfile: {
    borderRadius: "50%",
    height: "30px",
  },

  Name: {
    fontSize: "13px",
    marginRight: "10px",
  },
  Role: {
    fontSize: "13px",
  },
  NameRole: {
    display: "flex",
    flexDirection: "column",
    marginRight: "20px",
  },
}));
