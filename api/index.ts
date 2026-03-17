export default function handler(req: any, res: any) {
  const url = req.url || "";

  // 🚫 bypass dashboard (ini yang bikin ga loading)
  if (url.includes("/player/login/dashboard")) {
    return res.status(200).send("1");
  }

  // ✅ login validate
  if (url.includes("/player/growid/login/validate")) {
    return res.status(200).json({
      status: "success",
      token: "bypass"
    });
  }

  // ✅ checktoken
  if (url.includes("/player/growid/checktoken")) {
    return res.status(200).json({
      status: "success",
      token: "bypass"
    });
  }

  // ✅ validate checktoken
  if (url.includes("/player/growid/validate/checktoken")) {
    return res.status(200).json({
      status: "success",
      token: "bypass"
    });
  }

  return res.status(200).send("OK");
}
