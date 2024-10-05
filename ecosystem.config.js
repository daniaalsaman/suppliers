module.exports = {
  apps : [{
    name: 'supplier_',
    script: 'npm',
    args: 'start',
    cwd: '/root/actions-runner/_work/Supplier_Frontend/Supplier_Frontend',
    watch: true,
    env: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      key  : 'key.pem',
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/stage',
      repo : 'GIT_REPOSITORY',
      path: '/root/actions-runner/_work/Supplier_Frontend/Supplier_Frontend',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
