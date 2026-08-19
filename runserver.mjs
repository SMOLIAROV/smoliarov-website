import { existsSync, readFileSync } from "node:fs"
import { execFileSync } from "node:child_process"

const envFile = ".env.docker"

if (!existsSync(envFile)) {
  console.error(`ERROR: ${envFile} not found`)
  process.exit(1)
}

const envContent = readFileSync(envFile, "utf8")

const match = envContent.match(/^NODE_ENV=(.*)$/m)
const nodeEnv = match?.[1]?.trim()

if (!nodeEnv) {
  console.error("ERROR: NODE_ENV is not set")
  process.exit(1)
}

const run = (args) => {
  console.log(`\n> docker compose ${args.join(" ")}\n`)

  execFileSync("docker", ["compose", ...args], {
    stdio: "inherit",
  })
}

switch (nodeEnv) {
  case "development":
    console.log("==> Development mode")

    run([
      "--env-file",
      envFile,
      "-f",
      "docker-compose.dev.yml",
      "up",
      "-d",
      "--build",
    ])
    break

  case "production":
    console.log("==> Production mode")

    run(["--env-file", envFile, "-f", "docker-compose.yml", "pull"])

    run([
      "--env-file",
      envFile,
      "-f",
      "docker-compose.yml",
      "up",
      "-d",
      "--no-build",
    ])
    break

  default:
    console.error(`ERROR: Unsupported NODE_ENV='${nodeEnv}'`)
    console.error("Allowed values: development, production")
    process.exit(1)
}
