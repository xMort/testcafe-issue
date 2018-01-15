import { Selector } from 'testcafe';

fixture('Tests')
    .beforeEach(async (t) => {
        await t.navigateTo('https://jsfiddle.net/xmort/ks2qezq2/');
    });

const counterSelector = Selector('#chart-clicked');
const dotSelector = Selector('.highcharts-markers.highcharts-series-0.highcharts-tracker path:nth-child(6)', { timeout: 500 });

test('Test that line chart fires when TestCafe clicks on line chart marker.', async (t) => {
    await t.switchToIframe('iframe[name=result]');
    await t.click(dotSelector);
    await t.expect(counterSelector.innerText).eql('1');
});

test('Test that line chart fires when TestCafe clicks on line chart marker after hover.', async (t) => {
    await t.switchToIframe('iframe[name=result]');
    await t.hover(dotSelector);
    await t.click(dotSelector);
    await t.expect(counterSelector.innerText).eql('1');
});

test('Test that line chart fires when TestCafe clicks on line chart marker after hover and mouse move.', async (t) => {
    await t.switchToIframe('iframe[name=result]');
    await t.hover(dotSelector);
    await t.click(dotSelector, { offsetX: 1, offsetY: 1 });
    await t.expect(counterSelector.innerText).eql('1');
});
