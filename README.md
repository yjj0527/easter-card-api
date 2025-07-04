# Easter Card API

This is a simple application that uses Cloudflare Workers with AI features to generate custom Easter card images.

## Features

- Generate personalized Easter card images.
- Powered by Cloudflare AI Workers for fast and scalable performance.
- Easy to integrate into your projects.

## Prerequisites

- A Cloudflare account.
- Cloudflare Workers enabled.
- Basic knowledge of JavaScript.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/easter-card-api.git
   cd easter-card-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Deploy to Cloudflare Workers:
   ```bash
   wrangler publish
   ```

## Usage

Send a POST request to the deployed endpoint with the desired parameters for the Easter card. Example:

```json
{
	"message": "Happy Easter!",
	"theme": "spring",
	"color": "pastel"
}
```

The API will return a URL to the generated image.

## Example Request

```bash
curl -X POST https://your-worker-url.workers.dev \
-H "Content-Type: application/json" \
-d '{
  "message": "Happy Easter!",
  "theme": "bunny",
  "color": "pink"
}'
```

## Example Response

```json
{
	"imageUrl": "https://your-worker-url.workers.dev/images/easter-card.png"
}
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Cloudflare Workers](https://workers.cloudflare.com/)
- [Cloudflare AI](https://www.cloudflare.com/ai/)
- Inspiration from the Easter holiday spirit!
