function normalizePanel(panel) {
  const wrapper = panel.firstElementChild;
  if (!wrapper || wrapper.tagName !== 'P' || !wrapper.querySelector('div, ul')) {
    return panel;
  }

  const fragment = document.createDocumentFragment();
  while (wrapper.firstChild) {
    fragment.append(wrapper.firstChild);
  }
  wrapper.replaceWith(fragment);
  return panel;
}

function decorateTaskList(section) {
  const panel = normalizePanel(section.firstElementChild);
  if (!panel) return;

  const [header, list] = panel.children;
  if (header) header.classList.add('talent-hub-panel-header');
  if (!list) return;

  list.classList.add('talent-hub-task-list');
  [...list.children].forEach((item, index) => {
    item.classList.add('talent-hub-task-item');

    if (index === 0) item.classList.add('is-neutral');
    if (index > 0) item.classList.add('is-alert');

    const paragraphs = [...item.querySelectorAll(':scope > p')];
    if (paragraphs[0]) paragraphs[0].classList.add('talent-hub-task-title');
    if (paragraphs[1]) paragraphs[1].classList.add('talent-hub-task-copy');
    if (paragraphs[2]) paragraphs[2].classList.add('talent-hub-task-action');
  });
}

function decorateSummary(section) {
  const panel = normalizePanel(section.firstElementChild);
  if (!panel) return;

  const [header, content] = panel.children;
  if (header) header.classList.add('talent-hub-panel-header');
  if (!content) return;

  content.classList.add('talent-hub-summary-content');
  const [subheader, list] = content.children;
  if (subheader) subheader.classList.add('talent-hub-summary-header');
  if (!list) return;

  list.classList.add('talent-hub-metric-grid');
  [...list.children].forEach((item) => {
    item.classList.add('talent-hub-metric-card');
    if (item.querySelector('svg')) item.classList.add('has-chart');
  });
}

export default function decorate(block) {
  const sections = [...block.children];

  sections.forEach((section) => {
    section.classList.add('talent-hub-section');
    const panel = section.firstElementChild;
    if (panel) normalizePanel(panel).classList.add('talent-hub-panel');
  });

  if (sections[0]) sections[0].classList.add('talent-hub-welcome');

  if (sections[1]) {
    sections[1].classList.add('talent-hub-tasks');
    decorateTaskList(sections[1]);
  }

  if (sections[2]) {
    sections[2].classList.add('talent-hub-summary');
    decorateSummary(sections[2]);
  }
}
