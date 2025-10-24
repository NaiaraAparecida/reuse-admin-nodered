FROM nodered/node-red:3.1

# Install dashboard palette
RUN npm --no-update-notifier --no-fund --silent install node-red-dashboard

# Copy flows and settings
COPY flows.json /data/flows.json
COPY settings.js /data/settings.js

# Default envs (override in compose or runtime)
ENV REUSE_API_BASE_URL=https://api.reuse.local
ENV REUSE_ADMIN_TOKEN=changeme