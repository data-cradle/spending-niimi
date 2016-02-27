/*
 * Icons for COFOG taxonomy
 *
 */
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 330000; // 一人分の扶養控除
Taxes.taxRate = 0.06; // 住民税率(市民税のみ)

var OpenSpending = OpenSpending || {};

OpenSpending.identifier = 'niimi_2015_ippan';
OpenSpending.year = '2015';

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {

  /* yokohama cofog */
  '1':    { icon: 'icons/government.svg',                 color : '#C75746', b color : '#935B3B' },
  '1-1':  { icon: 'icons/government.svg',                 color : '#C75746', b color : '#935B3B' },
  '2':    { icon: 'icons/publicaffairs.svg',              color : '#C75746', b color : '#0AB971' },
  '2-1':  { icon: 'icons/government-uk.svg',              color : '#C75746', b color : '#0AB971' },
  '2-2':  { icon: 'icons/dollar.svg',                     color : '#C75746', b color : '#0AB971' },
  '2-3':  { icon: 'icons/books.svg',                      color : '#C75746', b color : '#0AB971' },
  '2-4':  { icon: 'icons/civilian-action.svg',            color : '#C75746', b color : '#0AB971' },
  '2-5':  { icon: 'icons/research.svg',                   color : '#C75746', b color : '#0AB971' },
  '2-6':  { icon: 'icons/police.svg',                     color : '#C75746', b color : '#0AB971' },
  '3':    { icon: 'icons/family2.svg',                    color : '#C75746', b color : '#4E6D00' },
  '3-1':  { icon: 'icons/dollar.svg',                     color : '#C75746', b color : '#4E6D00' },
  '3-2':  { icon: 'icons/helping-others.svg',             color : '#C75746', b color : '#4E6D00' },
  '3-3':  { icon: 'icons/old-age.svg',                    color : '#C75746', b color : '#4E6D00' },
  '3-4':  { icon: 'icons/pre-school.svg',                 color : '#C75746', b color : '#4E6D00' },
  '3-5':  { icon: 'icons/wheelchair.svg',                 color : '#C75746', b color : '#4E6D00' },
  '3-6':  { icon: 'icons/aid-developing-countries.svg',   color : '#C75746', b color : '#4E6D00' },
  '3-7':  { icon: 'icons/hospital.svg',                   color : '#C75746', b color : '#4E6D00' },
  '4':    { icon: 'icons/helping-others.svg',             color : '#C75746', b color : '#D33673' },
  '4-1':  { icon: 'icons/waste.svg',                      color : '#C75746', b color : '#D33673' },
  '4-2':  { icon: 'icons/toilet.svg',                     color : '#C75746', b color : '#D33673' },
  '5':    { icon: 'icons/labour.svg',                     color : '#C75746', b color : '#2A3A03' },
  '5-1':  { icon: 'icons/labour.svg',                     color : '#C75746', b color : '#2A3A03' },
  '6':    { icon: 'icons/farms.svg',                      color : '#C75746', b color : '#EC2406' },
  '6-1':  { icon: 'icons/farms.svg',                      color : '#C75746', b color : '#EC2406' },
  '6-2':  { icon: 'icons/pig.svg',                        color : '#C75746', b color : '#EC2406' },
  '6-3':  { icon: 'icons/environment.svg',                color : '#C75746', b color : '#EC2406' },
  '6-4':  { icon: 'icons/tree.svg',                       color : '#C75746', b color : '#EC2406' },
  '7':    { icon: 'icons/economic-aid.svg',               color : '#C75746', b color : '#938626' },
  '7-1':  { icon: 'icons/economic-aid.svg',               color : '#C75746', b color : '#938626' },
  '7-2':  { icon: 'icons/economy-tourism.svg',            color : '#C75746', b color : '#938626' },
  '8':    { icon: 'icons/manufactoring-construction.svg', color : '#C75746', b color : '#C75746' },
  '8-1':  { icon: 'icons/forest.svg',                     color : '#C75746', b color : '#C75746' },
  '8-2':  { icon: 'icons/street-lights.svg',              color : '#C75746', b color : '#C75746' },
  '8-3':  { icon: 'icons/island.svg',                     color : '#C75746', b color : '#C75746' },
  '8-4':  { icon: 'icons/manufactoring-construction.svg', color : '#C75746', b color : '#C75746' },
  '8-5':  { icon: 'icons/housing.svg',                    color : '#C75746', b color : '#C75746' },
  '8-6':  { icon: 'icons/toilet.svg',                     color : '#C75746', b color : '#C75746' },
  '9':    { icon: 'icons/fire-brigade.svg',               color : '#C75746', b color : '#D33673' },
  '9-1':  { icon: 'icons/fire-brigade.svg',               color : '#C75746', b color : '#D33673' },
  '10':   { icon: 'icons/education.svg',                  color : '#C75746', b color : '#790586' },
  '10-1': { icon: 'icons/education.svg',                  color : '#C75746', b color : '#790586' },
  '10-2': { icon: 'icons/schools.svg',                    color : '#C75746', b color : '#790586' },
  '10-3': { icon: 'icons/schools.svg',                    color : '#C75746', b color : '#790586' },
  '10-4': { icon: 'icons/pre-school.svg',                 color : '#C75746', b color : '#790586' },
  '10-5': { icon: 'icons/misc-services.svg',              color : '#C75746', b color : '#790586' },
  '10-6': { icon: 'icons/sports.svg',                     color : '#C75746', b color : '#790586' },
  '11':   { icon: 'icons/money.svg',                      color : '#C75746', b color : '#790586' },
  '11-1': { icon: 'icons/money.svg',                      color : '#C75746', b color : '#790586' },
  '12':   { icon: 'icons/public-debt.svg',                color : '#C75746', b color : '#790586' },
  '12-1': { icon: 'icons/energy.svg',                     color : '#C75746', b color : '#790586' },
  '12-2': { icon: 'icons/money.svg',                      color : '#C75746', b color : '#790586' },
  '13':   { icon: 'icons/financial-admin.svg',            color : '#C75746', b color : '#790586' },
  '13-1': { icon: 'icons/financial-admin.svg',            color : '#C75746', b color : '#790586' }
};
