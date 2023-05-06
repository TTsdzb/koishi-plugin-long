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
        <div style={{ width: "300px" }}>
          <img src="https://img1.imgtp.com/2023/05/06/Zr0nuSBr.png" />
          <p
            style={{
              margin: 0,
              "text-align": "center",
              "font-size": "xx-large",
              "font-family": "sans-serif",
            }}
          >
            {text}
          </p>
        </div>
      </html>
    );
  });
}
