import { decryptString, verifyJwtToken } from "../utils/index.mjs";

export const authenticateUser = async (req, res, next) => {
  try {
    const authorization = req.headers["authorization"]
    if (!authorization){
      return res.status(401).send("You are not authenticated, please login to continue");
    }
    const accessToken = authorization.split("Bearer ")[1];

    if (!accessToken){
      return res.status(401).send("You are not authenticated, please login to continue");
    }

    const result = await verifyJwtToken(accessToken);

    console.log("verifyJwtToken ", result);

    if (result.isError){
      return res.status(403).send("You are not authorised to access this resource, please login to continue");
    }

    const decrypted = decryptString(result?.data?.user);

    if (!decrypted){
        return res.status(401).send("You are not authorised to access this resource, please login to continue");
    }
    req.user = decrypted
    return next()
  } catch (error) {
    return res.status(500).send("Sorry, something went wrong. Please, try again later")
  }
};
