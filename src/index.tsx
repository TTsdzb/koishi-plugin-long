import { Context, Schema } from "koishi";
import {} from "koishi-plugin-puppeteer";

export const name = "long";

export interface Config {}

export const Config: Schema<Config> = Schema.object({});

export const using = ["puppeteer"] as const;

export function apply(ctx: Context) {
  ctx.command("龙 <text:text>", "生成一张龙图").action((_, text) => {
    return (
      <html>
        <img src="https://img1.imgtp.com/2023/03/23/n8qbeFsv.png" />
        <p
          style={{
            position: "absolute",
            top: "180px",
            width: "300px",
            "text-align": "center",
            "font-size": "xx-large",
            "font-family": "sans-serif",
          }}
        >
          {text}
        </p>
      </html>
    );
  });
}
