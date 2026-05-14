function buildItem(row) {
  const cells = [...row.children];
  const [titleCell, ...contentCells] = cells;

  if (!titleCell || !contentCells.length) {
    return null;
  }

  const details = document.createElement('details');
  details.className = 'accordianslot-item';

  const summary = document.createElement('summary');
  summary.className = 'accordianslot-item-title';
  while (titleCell.firstElementChild) {
    summary.append(titleCell.firstElementChild);
  }

  if (!summary.textContent.trim()) {
    return null;
  }

  const body = document.createElement('div');
  body.className = 'accordianslot-item-body';

  contentCells.forEach((cell) => {
    while (cell.firstElementChild) {
      body.append(cell.firstElementChild);
    }
  });

  details.append(summary, body);
  return details;
}

export default function decorate(block) {
  const items = [...block.children]
    .map((row) => buildItem(row))
    .filter(Boolean);

  block.replaceChildren(...items);
}
