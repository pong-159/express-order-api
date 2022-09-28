import usermgmtService from "../services/usermgmtService.js";

async function getProfile(req, res) {
  try {
    const result = await usermgmtService.getProfile(req.params.id);
    if (result == null) {
      res.sendStatus(404);
    }
    res.status(200).json(result);
  } catch (err) {
    console.error(`Error while getting Users`, err.message);
    res.status(500).json(err);
  }
}

async function getOrder(req, res) {
  try {
    const result = await usermgmtService.getOrder(req.params.userId);
    if (result == null) {
      res.sendStatus(404);
    }
    res.status(200).json(result);
  } catch (err) {
    console.error(`Error while getting Users`, err.message);
    res.status(500).json(err);
  }
}

export default {
  getProfile,
  getOrder,
};
