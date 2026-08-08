import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const ogImageSize = { width: 1200, height: 630 };

export function buildOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          backgroundColor: "#0c0d0e",
          backgroundImage:
            "radial-gradient(circle at 12% 20%, rgba(74,222,190,0.30), transparent 45%), radial-gradient(circle at 88% 85%, rgba(74,222,190,0.16), transparent 45%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 14, height: 14, borderRadius: 9999, backgroundColor: "#4adabe", display: "flex" }} />
          <div style={{ color: "#9e9e9a", fontSize: 28, display: "flex" }}>
            Available for select consulting engagements
          </div>
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 76,
            fontWeight: 700,
            color: "#ededeb",
            display: "flex",
            lineHeight: 1.1,
          }}
        >
          {profile.name}
        </div>
        <div style={{ marginTop: 14, fontSize: 38, color: "#4adabe", display: "flex" }}>{profile.jobTitle}</div>
        <div style={{ marginTop: 30, fontSize: 28, color: "#9e9e9a", display: "flex", maxWidth: 920 }}>
          7+ years turning business problems into software that works.
        </div>
      </div>
    ),
    { ...ogImageSize }
  );
}
